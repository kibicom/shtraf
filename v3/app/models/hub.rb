class Hub < ActiveRecord::Base
  has_and_belongs_to_many :hub_pages
  accepts_nested_attributes_for :hub_pages
  
  def self.pages (hub_path)
    hub=Hub.where(path: hub_path).first
    hub.hub_pages unless hub.nil?
  end
  
  def pages
    self.hub_pages
  end
  
end
