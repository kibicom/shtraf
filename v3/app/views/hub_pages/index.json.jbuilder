json.array!(@hub_pages) do |hub_page|
  json.extract! hub_page, :name, :path
  json.url hub_page_url(hub_page, format: :json)
end
