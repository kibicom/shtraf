json.array!(@contries) do |contry|
  json.extract! contry, :name
  json.url contry_url(contry, format: :json)
end
