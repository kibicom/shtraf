json.array!(@customers) do |customer|
  json.extract! customer, :id, :id, :name, :phone
  json.url customer_url(customer, format: :json)
end
