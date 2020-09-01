
from django.http import JsonResponse
import json
from bucket.Bucket import Bucket
from todo_task.Todo import Todo
from todo_task.form import TodoForm
from bucket.form import BucketForm
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

def json_response(res):
    if res.get('result') == 'failure':
        return JsonResponse(res, status=500, safe=False)
    elif res.get('result') == 'success':
        return JsonResponse(res, status=200, safe=False)
    else:
        raise Exception('Unknown response: {}'.format(res))

def obj_to_dict(model_instance):
    serial_obj = serializers.serialize(
        'json', [model_instance], use_natural_foreign_keys=True)
    obj_as_dict = json.loads(serial_obj)[0]['fields']
    obj_as_dict['id'] = model_instance.pk
    return obj_as_dict

def success_response(output):
    return {'result': 'success', 'output': output}


def failure_response(output):
    return {'result': 'failure', 'output': output}

def get_form_response(data):
    if data != 'error':
        return success_response((data))
    else:
        return failure_response('error')

def save_form(form):
    if form.is_valid():
        data = form.save()
        return obj_to_dict(data)
    else:
        return 'error'

def save_task(request):
    body = json.loads(request.body)
    persisted = Todo.objects.filter(id=body.get('id'))
    if persisted:
        form = TodoForm(body, instance=persisted[0],)
    else:
        form = TodoForm(body, request)

    return get_form_response(save_form(form))

def get_task(request):
    _id = request.GET.get('id')
    task = []
    if _id:
        task = Todo.objects.filter(id=request.GET.get('id'))
    else:
         task = Todo.objects.all()
    converted_json = [obj_to_dict(x) for x in task]
    return success_response(converted_json)

def delete_task(request):
    task = Todo.objects.filter(id=request.GET.get('id'))
    converted_json = [obj_to_dict(x) for x in task]
    task.delete()
    return success_response(converted_json[0])

def save_bucket(request):
    body = json.loads(request.body)
    persisted = Bucket.objects.filter(id=body.get('id'))
    if persisted:
        form = BucketForm(body, instance=persisted[0],)
    else:
        form = BucketForm(body, request)
    converted_data = save_form(form)
    if body.get('copyBucketId'):
        todos =[]
        bucket_ref = Todo.objects.filter(bucket=body.get('copyBucketId'))
        for b  in bucket_ref:
            todo =obj_to_dict(b)
            todo['bucket'] = converted_data.get('id')
            t = TodoForm(todo, request)
            todos.append(save_form(t))
        converted_data['task_list'] = todos
    return get_form_response(converted_data)

def get_bucket(request):
    _id = request.GET.get('id')
    bucket = []
    if _id:
        bucket = Bucket.objects.filter(id=request.GET.get('id'))
    else:
        bucket = Bucket.objects.all()
    converted_json = [obj_to_dict(x) for x in bucket]
    for b in converted_json:
        tasks = Todo.objects.filter(bucket=b['id'])
        json_task = [obj_to_dict(x) for x in tasks]
        b['task_list'] = json_task
    return success_response(converted_json)

def delete_bucket(request):
    bucket = Bucket.objects.filter(id=request.GET.get('id'))
    converted_json = [obj_to_dict(x) for x in bucket]
    bucket.delete()
    return success_response(converted_json)

@csrf_exempt
def tasks(request):
    result = {'res': ''}
    if request.method == 'POST':
        return json_response(save_task(request))
    if request.method == 'GET':
        return json_response(get_task(request))
    if request.method == 'DELETE':
        return json_response(delete_task(request))

@csrf_exempt
def buckets(request):
    result = {'res': ''}
    if request.method == 'POST':
        return json_response(save_bucket(request))
    if request.method == 'GET':
        return json_response(get_bucket(request))
    if request.method == 'DELETE':
        return json_response(delete_bucket(request))