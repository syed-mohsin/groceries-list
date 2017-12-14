class RecipeStep < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :step
end
