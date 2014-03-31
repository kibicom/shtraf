require 'test_helper'

class ContriesControllerTest < ActionController::TestCase
  setup do
    @contry = contries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:contries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create contry" do
    assert_difference('Contry.count') do
      post :create, contry: { name: @contry.name }
    end

    assert_redirected_to contry_path(assigns(:contry))
  end

  test "should show contry" do
    get :show, id: @contry
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @contry
    assert_response :success
  end

  test "should update contry" do
    patch :update, id: @contry, contry: { name: @contry.name }
    assert_redirected_to contry_path(assigns(:contry))
  end

  test "should destroy contry" do
    assert_difference('Contry.count', -1) do
      delete :destroy, id: @contry
    end

    assert_redirected_to contries_path
  end
end
