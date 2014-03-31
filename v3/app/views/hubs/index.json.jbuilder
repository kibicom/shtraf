json.array!(@hubs) do |hub|
  json.extract! hub, :name, :path
  json.url hub_url(hub, format: :json)
end
