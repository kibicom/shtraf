class Customer < ActiveRecord::Base
  has_many :autos, dependent: :destroy
end
