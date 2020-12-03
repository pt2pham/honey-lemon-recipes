class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.float :difficulty, null: false
      t.string :food_type, null: false
      t.string :serving_size, null: false
      t.integer :duration, null: false
      t.text :ingredients, null: false # I might make this be a relation to an Ingredients model 
      t.text :instructions, null: false
      t.text :notes
      t.text :tags
      t.string :image, default: 'https://www.ilac.com/wp-content/uploads/2019/06/placeholder-600x400.png'

      t.timestamps
    end
  end
end
