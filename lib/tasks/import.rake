 desc "import videos data from peepcode.com"
 task :import => :environment do
   Screencast.all.each do |sc|
     Video.create(sc)
   end
 end
