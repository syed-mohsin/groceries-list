class List < ActiveRecord::Base
  has_many :items, dependent: :destroy

  default_scope { order(created_at: :asc) }

  validates :name, presence: true, length: { minimum: 3, maximum: 30 }
end
