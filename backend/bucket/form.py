import django.forms as forms
from .Bucket import Bucket


class BucketForm(forms.ModelForm):
    class Meta:
        model = Bucket
        fields = ['title', 'description']

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super(BucketForm, self).__init__(*args, **kwargs)
        self.full_clean()

    def clean(self):
        cleaned_data = super(BucketForm, self).clean()
        return cleaned_data

    def save(self, commit=True):
        instance = super(BucketForm, self).save(commit=False)
        if commit:
            instance.save()
        return instance
