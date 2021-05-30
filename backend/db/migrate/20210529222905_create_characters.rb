class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :firstname
      t.string :lastname
      t.string :sex
      t.integer :age
      t.string :race
      t.string :alignment
      t.string :trait1
      t.string :trait2
      t.string :background
      t.string :storyhook
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma

      t.timestamps null: false
    end
  end
end
