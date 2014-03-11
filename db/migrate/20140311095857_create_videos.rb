class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.string :image
      t.string :link
      t.boolean :watched

      t.timestamps
    end
  end
end
