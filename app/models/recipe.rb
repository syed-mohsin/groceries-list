class Recipe < ActiveRecord::Base
  has_many :recipe_steps
  has_many :recipe_ingredients
  has_many :steps, through: :recipe_steps
  has_many :ingredients, through: :recipe_ingredients

  default_scope { order(created_at: :asc) }
end
