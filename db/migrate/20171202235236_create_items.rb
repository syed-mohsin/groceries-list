class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.text :content
      t.boolean :is_in_main_list, default: true
      t.boolean :is_completed, default: false
      t.decimal :price, :precision => 8, :scale => 2

      t.timestamps null: false
    end
  end
end
