require 'test_helper'

class RobokassaControllerTest < ActionController::TestCase
  test "should get button" do
    get :button
    assert_response :success
  end

end
