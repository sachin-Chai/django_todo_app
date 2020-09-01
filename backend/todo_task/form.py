from .Todo import Todo
import django.forms as forms


class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ['title', 'completed', 'description', 'bucket']

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super(TodoForm, self).__init__(*args, **kwargs)
        self.full_clean()

    def clean(self):
        cleaned_data = super(TodoForm, self).clean()
        return cleaned_data

    def save(self, commit=True):
        instance = super(TodoForm, self).save(commit=False)
        # instance.author = self.user
        if commit:
            instance.save()
        return instance
