# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.

class Bike
    attr_accessor :model, :wheels, :frame_size, :speed
    def initialize (model, wheels, frame_size, speed)
        @model = model
        @wheels = 2
        @frame_size = frame_size
        @speed = 0
    end

    def get_bike_info
        "This #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
    end

    def ring_bell
        "Ding ding!"
    end

    def pedal_faster
        @speed = @speed + 1
    end

    def brake
        if @speed <= 0
            @speed = 0
        else
            @speed = @speed - 1
        end
    end
end


p "1. Info about My Bike Instance:"
my_bike = Bike.new("Trek", 2, "168cm", 0)
p my_bike.get_bike_info
puts " \n"



# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.

p "2. Bike Bell Method:"
p my_bike.ring_bell
puts " \n"





# Expected output example: my_bike.ring_bell => 'Ding ding!'


# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.


p "3. Bike Speed:"
p my_bike.speed
puts " \n"


# Expected output example: my_bike.speed => 0


# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.

p "4. Increase bike speed by 10:"
p 10.times{my_bike.pedal_faster}
puts " \n"




# Expected output example: my_bike.pedal_faster 10 => 10


# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.

p "5. Increase bike speed by 5:"
5.times{my_bike.brake}
p my_bike.speed

p "Decrease bike speed by 10 more to show bike can't go negative speeds:"
10.times{my_bike.brake}
p my_bike.speed
puts " \n"







# Expected output example: my_bike.brake 15 => 0
