echo "Starting service..."
cd my-app
nvm install node
yarn dev
echo "Starting react..."
cd /backend
python3 connect.py