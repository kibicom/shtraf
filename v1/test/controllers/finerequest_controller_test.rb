require 'test_helper'

class FinerequestControllerTest < ActionController::TestCase
  test "should get requestPenalties" do
    get :requestPenalties
    assert_response :success
  end

end
