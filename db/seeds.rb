# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

9.times do |i|
  Recipe.create(
    name: "Lemon #{i + 1}",
    difficulty: i,
    food_type: "Yemon",
    serving_size: i,
    duration: 10,
    ingredients: "1 tbsp lemon juice;#{i + 1} tbsp honey",
    instructions: "Mix it real nice",
    notes: "This is one of the best recipes in the world! It's my life story.",
    tags: "cool;hip;citrus;summer;sweet",
  )
end
