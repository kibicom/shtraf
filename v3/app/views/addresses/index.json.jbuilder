json.array!(@addresses) do |address|
  json.extract! address, :name, :address1, :address2, :streetid, :cityid, :areaid, :home
  json.url address_url(address, format: :json)
end
