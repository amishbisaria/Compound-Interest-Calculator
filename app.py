#FLASK SETUP
import math
from flask import render_template,Flask, jsonify, request
app = Flask(__name__, template_folder='.')

@app.route('/', methods=['GET', 'POST'])
def home():
   return render_template('index.html')

@app.route('/calculate')
def get_values():
   initial = float(request.args.get('initial'))
   interest = float(request.args.get('interest'))
   time = float(request.args.get('time'))
   compound = float(request.args.get('compound'))

   total = initial * math.pow(1 + (interest * 0.01) / compound, compound * time)
   compoundInterest = total - initial
   rounded = round(compoundInterest, 2)

   return f"{rounded}" #jsonify({'data': f'Compound Interest: {compoundInterest}'})

if __name__ == '__main__':
    app.run(host="localhost", port=5500, debug=True)
