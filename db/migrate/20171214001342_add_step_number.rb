class AddStepNumber < ActiveRecord::Migration
  def change
    add_column :steps, :number, :integer
  end
end
