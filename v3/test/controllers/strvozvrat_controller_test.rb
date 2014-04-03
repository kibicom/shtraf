require 'test_helper'

class StrvozvratControllerTest < ActionController::TestCase
  test "should get result" do
    get :result
    assert_response :success
  end

  test "should get success" do
    get :success
    assert_response :success
  end

  test "should get fail" do
    get :fail
    assert_response :success
  end

end
