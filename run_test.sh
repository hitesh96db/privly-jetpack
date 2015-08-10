# Script run on Travis CI
# Runs the Jetpack extension tests

REPO_TOKEN="HITESH_ROCKS"

if [ -z "$TRAVIS" ]; then
  # Local Env
  echo "Local Environment"
  export JPM_FIREFOX_BINARY=`which firefox`
else
  # Travis CI
  echo "Travis CI"
  export JPM_FIREFOX_BINARY=$TRAVIS_BUILD_DIR/../firefox/firefox
fi

current_dir=`pwd`
current_dir+="/"
sed -i "s:replace_with_path:$current_dir:g" test.json
sed -i "s:replace_with_token:$REPO_TOKEN:g" test.json

# Generate the instrumented files
istanbul instrument lib/ -o lib/instrument/

# All instrumented files end with .in.js and are placed in lib/
for f in lib/instrument/*; do
  filename=${f##*/}
  # Splits the file based on '.' delimiter
  array=(${filename//\./ })
  name=${array[0]}
  cp lib/instrument/$filename lib/$name.in.js
done

# Run the tests, Save the output
jpm --prefs test.json run | tee test.output

# Check for test failure,
# Set the exit status accordingly.
isFail=`grep "FAILURE" test.output`
rm test.output

if [ ! -z "$isFail" ]; then
  echo "You have some work to do: tests are failing."
  exit 1
fi

# Cleanup
# Remove the instrumented files
rm lib/*.in.js 
rm -r lib/instrument/

exit 0
