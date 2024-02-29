if [ ! -d "output"]
then
  mkdir output
fi

robot -d output api-tests.robot
robot -d output ui-tests.robot
