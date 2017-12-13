class Item < ActiveRecord::Base
  belongs_to :List

  default_scope { order(created_at: :asc) }

  validates :content, presence: true, length: { minimum: 2, maximum: 30 }
  validates :price, presence: true, numericality: { greater_than: 0, less_than: 1000000 }
end
