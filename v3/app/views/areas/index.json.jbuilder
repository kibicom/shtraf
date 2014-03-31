json.array!(@areas) do |area|
  json.extract! area, :name
  json.url area_url(area, format: :json)
end
