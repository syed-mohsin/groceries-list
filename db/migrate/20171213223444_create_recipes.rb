class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.integer :prep_time
      t.text :notes

      t.timestamps null: false
    end
  end
end
