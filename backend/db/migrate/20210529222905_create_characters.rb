class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :firstname
      t.string :lastname
      t.string :gender
      t.integer :age
      t.string :region
      t.string :trait1
      t.string :trait2
      t.string :background
      t.string :storyhook

      t.timestamps null: false
    end
  end
end
