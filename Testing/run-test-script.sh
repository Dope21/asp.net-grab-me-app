if [ ! -d "Testing/output"]
then
  mkdir Testring/output
fi

robot -d Testing/output Testing/api-tests.robot
robot -d Testing/output Testing/ui-tests.robot
