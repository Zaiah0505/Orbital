//UPDATE: an array whose members are objects with one key (faculties), whose prop value
//is an array to contain majors of every faculty 

// if that particular major (eg. BBA) has a specialisation, then the line2 array 
// will contain objects with one key(major) whose prop value is an array whose member is
// specialisation majors

//else if that major does not have a specialisation (eg. History), then the line2 array
//will contain objects with one key (major) whose prop value is ['N/A']
//see below for example

dummyfac =  [{'Business': [{'Business Administration': ['Marketing', 'Finance']},
                                {'Accountancy': ['N/A']}]},
                {'FASS': [{'History': ['N/A']},
                        {'Sociology': ['N/A']}}],





//1. list of faculty in array form example:

const faculties = ['Arts and Social Sciences', 'Business', 
                  'Computing', 'Dentistry',
                  'Design & Environment', 'Engineering',
                  'Law', 'Medicine', 'Music','Science' ];

//2. list of majors for each faculty in array form 
// refer to Options.js in Components folder, I typed in all of it alr 
// for FASS u can either give me segmented one or full list (refer to Options.js)

const computing = ['Business Analytics', 'Computer Engineering', 
                  'Computer Science', 'Information Security',
                  'Information Systems'];

//3. list of Specialisation for each major that has specialisation 
//array form whose members are objects 
// try to format it in {majorname}{Specialisation}
// also group stuff that are compulsory and stuff that are optional

const businessMarketing = ['a', 'b'];

//4. list of Residential College in array form
const residence = ['CAPT', 'RC4', 'RVRC','Tembusu', 'USP'];

//5. a link to process all the inputs which will return the suggested module plan 
//for create module plan button 

//link should return:

//6. TENTATIVE if residence === N/A return an array of GEMs in this format
const GEMs = ['GER: Quantitative Reasoning', 'GEH: Humanities',...];

//TENTATIVE extension for what mod avail for each GEM: return an array, whose members are OBJECTS
//whose props value are an array of OBJECTS with 4 props, id, name, number of MCs, link
const gemMods = [
                    {GEH: [{id: GEH1001, name: 'GEH1000: Globalisation and New Media', MCs: 4, link: 'NUS MODS link'},
                          {id: GEH 1002, name: 'GEH 1002: lallalalal', MCs:4, link:},
                          {id: GEH 23420, name: 'GEH 2304023: lafjkljwe', MCs: 4, link}]}, //end of first object member
                    
                    {GES: {id: GES324230, name: 'GES234230: adkfjkjfklasj', MCs: 4, link}} //end of object 2
                    ]; //end of array


//else if UTCP (Tembu, CAPT and RC4) return array of UTCP mods
const UTCP = ['Junior Sem..', 'Senior Seminar: Singapore Studies',
'Senior Seminar: GEM', IEM 1, IEM 2]

//for extension for each UTCP mods, follow the format of GEM (take note that diff RCs have diff JS and SS
//but usually same IEM)

//else if RVRC return array of whatever RV is doing, extension same as above

//else if USP returen array of whatever USP is doing, extension same as above



//7. return core modules according to what major in
//format of array of objects with properties code, name, no of MCs ,link to NUSMods description

array [
    {code: "MA1521",
     name: "Calculus for Computing",
     MCs: 4,
     link: "https://nusmods.com/modules/MA1521/calculus-for-computing"}]

//8. same for specialisation modules, but need to 
//take care of whether it is compulsory 
//array, whose members are objects, whose members are array, 
//whose members are objects (see GEMs above)
array [ {compulsory: [
      {code: "MA1521",
      name: "Calculus for Computing",
      MCs: 4,
      link: "https://nusmods.com/modules/MA1521/calculus-for-computing"} ] },

      {choosethree: [
            {code: "MA1521",
            name: "Calculus for Computing",
            MCs: 4,
            link: "https://nusmods.com/modules/MA1521/calculus-for-computing"} 
      ] }


]}
      
//9. for UEs, the idea is to return all the mods they have not taken, taking into consideraton
//preclusions and requirements so yea idk if its possible but if yes then same format as
//above



