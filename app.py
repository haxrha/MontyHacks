import csv
import json

from flask import (Flask, flash, jsonify, redirect, render_template, request, send_file, send_from_directory, session,
                   url_for)

app = Flask(__name__)
users = {}

needs = {}
# json_data = json.load(users)


@app.route('/<path:path>')
def static_serve(path):
  print(path)
  if "." not in path.split("/")[-1]:
    path += ".html"
  return send_from_directory('frontend', path)


@app.route('/')
def home():
  return send_file("frontend/home.html")


@app.route('/success/<name>')
def success(name):
  return 'welcome %s' % name


# @app.route('/login', methods=['POST', 'GET'])
# def login():
#   if request.method == 'POST':
#     user = request.form['name']
#     users.append(user)
#     password = request.form['password']
#     return redirect(url_for('success', name=user))
#   else:
#     user = request.args.get('name')
#     return redirect(url_for('success', name=user))

# @app.route('/register', methods=['POST'])
# def register():
#   user_data = request.get_json()
#   username = user_data.get('username')
#   password = user_data.get('password')

#   if username in users:
#     return jsonify({'error': 'User already exists'}), 400

#   users[username] = {'password': password}

#   with open('data.json', 'w') as f:
#     json.dump(users, f)

#   return jsonify({'message': 'User registered successfully'}), 201


@app.route('/needs', methods=['POST', 'GET'])
def render_needs():
  csvfile = open('foodbanks.csv', 'r')
  jsonfile = open('data.json', 'w')
  fieldnames = ('name', 'slug', 'url', 'shopping_list_url', 'phone', 'email', 'address', 'postcode',
                'parliamentary_contituency', 'mp', 'mp_party', 'ward', 'district', 'country', 'charity_number',
                'charity_register_url', 'closed', 'latt_long', 'network')
  reader = csv.DictReader(csvfile, fieldnames)
  print([row for row in reader])
  # out = json.dumps()
  # print(out)


app.run()
