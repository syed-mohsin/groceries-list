class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.text :content
      t.string :quantity

      t.timestamps null: false
    end
  end
end
