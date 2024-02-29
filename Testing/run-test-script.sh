if [ ! -d "Testing/output"]
then
  mkdir Testing/output
fi

robot -d Testing/output Testing/api-tests.robot
robot -d Testing/output Testing/ui-tests.robot
