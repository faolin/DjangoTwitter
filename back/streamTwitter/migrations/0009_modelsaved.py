# Generated by Django 2.2 on 2019-05-13 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('streamTwitter', '0008_tweet_text_nettoye'),
    ]

    operations = [
        migrations.CreateModel(
            name='ModelSaved',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userMail', models.CharField(blank=True, default=None, max_length=80, null=True)),
                ('nameOfTheModel', models.CharField(blank=True, default=None, max_length=80, null=True)),
            ],
        ),
    ]
