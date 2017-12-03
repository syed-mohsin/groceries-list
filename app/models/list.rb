class List < ActiveRecord::Base
  has_many :items, dependent: :destroy

  validates :name, presence: true, length: { minimum: 3, maximum: 30 }
end
