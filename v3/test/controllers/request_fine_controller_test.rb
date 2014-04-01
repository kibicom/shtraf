require 'test_helper'

class RequestFineControllerTest < ActionController::TestCase
  test "should get getFine" do
    get :getFine
    assert_response :success
  end

end
