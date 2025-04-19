from flask import Flask, request, jsonify, render_template
import mysql.connector

app = Flask(__name__,template_folder="Templates")

DB_CONFIG = {
    'host': '127.0.0.1',
    'user': 'root',
    'password': '',
    'Database': 'phase2_group8v2' # change to the name of your db in xmap
}


def get_db_connection():
    return mysql.connector.connect(**DB_CONFIG)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/products', methods =['POST'])
def add_product():
    data = request.json