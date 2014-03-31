json.array!(@customers) do |customer|
  json.extract! customer, :name, :comment
  json.url customer_url(customer, format: :json)
end
