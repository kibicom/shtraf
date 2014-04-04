json.array!(@autos) do |auto|
  json.extract! auto, :nauto, :reg_auto
  json.url auto_url(auto, format: :json)
end
