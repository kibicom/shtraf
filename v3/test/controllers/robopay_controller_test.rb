require 'test_helper'

class RobopayControllerTest < ActionController::TestCase
  test "should get success" do
    get :success
    assert_response :success
  end

  test "should get fail" do
    get :fail
    assert_response :success
  end

end
