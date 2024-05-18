import csv
import json

from flask import (Flask, flash, jsonify, redirect, render_template, request, send_file, send_from_directory, session,
                   url_for)

app = Flask(__name__)
users = {}


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


def process_needs(needs):
  data = []
  for need in needs:
    nf = {}
    nf["id"] = need["id"]
    nf["foodbank"] = {"name": need["foodbank"]["name"], "url": need["foodbank"]["urls"]["self"]}
    nf["needs"] = need["needs"]
    nf["excess"] = need["excess"]
    data.append(nf)
  return data


@app.route('/needs.json')
def send_needs():
  needs = json.loads(open('needs.json', "r").read())
  return jsonify(needs)


app.run()
