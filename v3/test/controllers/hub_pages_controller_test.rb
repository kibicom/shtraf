require 'test_helper'

class HubPagesControllerTest < ActionController::TestCase
  setup do
    @hub_page = hub_pages(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:hub_pages)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create hub_page" do
    assert_difference('HubPage.count') do
      post :create, hub_page: { name: @hub_page.name, path: @hub_page.path }
    end

    assert_redirected_to hub_page_path(assigns(:hub_page))
  end

  test "should show hub_page" do
    get :show, id: @hub_page
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @hub_page
    assert_response :success
  end

  test "should update hub_page" do
    patch :update, id: @hub_page, hub_page: { name: @hub_page.name, path: @hub_page.path }
    assert_redirected_to hub_page_path(assigns(:hub_page))
  end

  test "should destroy hub_page" do
    assert_difference('HubPage.count', -1) do
      delete :destroy, id: @hub_page
    end

    assert_redirected_to hub_pages_path
  end
end
