class House < ApplicationRecord
  validates :address, presence: true

  has_many(
    :people,
    class_name: 'Person',
    foreign_key: :person_id,
    primary_key: :id
  )

end
