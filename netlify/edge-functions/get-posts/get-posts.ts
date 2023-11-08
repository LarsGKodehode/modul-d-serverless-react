import type { Context } from "@netlify/edge-functions";

const posts: {
  id: number;
  title: string;
  body: string;
}[] = [
  {
    id: 1,
    title: "Hello, little man. I will destroy you!",
    body: `And from now on you're all named Bender Jr. We're also Santa Claus! And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet. I didn't ask for a completely reasonable excuse! I asked you to get busy!

    Can I use the gun? Oh, I think we should just stay friends. Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! They're like sex, except I'm having them! You guys go on without me! I'm going to go… look for more stuff to steal!
    
    Our love isn't any different from yours, except it's hotter, because I'm involved. In our darkest hour, we can stand erect, with proud upthrust bosoms. I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.
    
    And why did 'I' have to take a cab? Eeeee! Now say "nuclear wessels"! Oh Leela! You're the only person I could turn to; you're the only person who ever loved me. Bender, we're trying our best. You won't have time for sleeping, soldier, not with all the bed making you'll be doing.
    
    Leela, Bender, we're going grave robbing. I was having the most wonderful dream. Except you were there, and you were there, and you were there! Dr. Zoidberg, that doesn't make sense. But, okay! THE BIG BRAIN AM WINNING AGAIN! I AM THE GREETEST! NOW I AM LEAVING EARTH, FOR NO RAISEN!
    
    OK, this has gotta stop. I'm going to remind Fry of his humanity the way only a woman can. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors!
    
    Is today's hectic lifestyle making you tense and impatient? Oh Leela! You're the only person I could turn to; you're the only person who ever loved me. I'm a thing. Guards! Bring me the forms I need to fill out to have her taken away!
    
    I haven't felt much of anything since my guinea pig died. With gusto. Hello Morbo, how's the family? Too much work. Let's burn it and say we dumped it in the sewer. You can crush me but you can't crush my spirit!
    
    Does anybody else feel jealous and aroused and worried? There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! I love you, buddy! Yeah, and if you were the pope they'd be all, "Straighten your pope hat." And "Put on your good vestments."
    
    It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. I saw you with those two "ladies of the evening" at Elzars. Explain that.
    
    This is the worst part. The calm before the battle. Quite possible. We live long and are celebrated poopers. Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.`,
  },
  {
    id: 2,
    title: "Father Christmas. Santa Claus. Or as I've always known him: Jeff.",
    body: `Aw, you're all Mr. Grumpy Face today. They're not aliens, they're Earth…liens! You know when grown-ups tell you 'everything's going to be fine' and you think they're probably lying to make you feel better?

    All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong?
    I hate yogurt. It's just stuff with bits in.
    Did I mention we have comfy chairs?
    *Insistently* Bow ties are cool! Come on Amy, I'm a normal bloke, tell me what normal blokes do! No… It's a thing; it's like a plan, but with more greatness. No… It's a thing; it's like a plan, but with more greatness.
    
    *Insistently* Bow ties are cool! Come on Amy, I'm a normal bloke, tell me what normal blokes do! You hate me; you want to kill me! Well, go on! Kill me! KILL ME! I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship.
    
    I'm the Doctor. Well, they call me the Doctor. I don't know why. I call me the Doctor too. I still don't know why. I am the Doctor, and you are the Daleks! It's art! A statement on modern society, 'Oh Ain't Modern Society Awful?'!
    
    *Insistently* Bow ties are cool! Come on Amy, I'm a normal bloke, tell me what normal blokes do! Father Christmas. Santa Claus. Or as I've always known him: Jeff. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
    
    You hate me; you want to kill me! Well, go on! Kill me! KILL ME! Heh-haa! Super squeaky bum time! Father Christmas. Santa Claus. Or as I've always known him: Jeff. Father Christmas. Santa Claus. Or as I've always known him: Jeff.
    
    The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant. Father Christmas. Santa Claus. Or as I've always known him: Jeff.
    
    It's art! A statement on modern society, 'Oh Ain't Modern Society Awful?'! I hate yogurt. It's just stuff with bits in. Sorry, checking all the water in this area; there's an escaped fish. No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call me the Rotmeister.
    
    It's art! A statement on modern society, 'Oh Ain't Modern Society Awful?'! It's a fez. I wear a fez now. Fezes are cool. No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call me the Rotmeister.
    
    They're not aliens, they're Earth…liens! Heh-haa! Super squeaky bum time! Saving the world with meals on wheels. *Insistently* Bow ties are cool! Come on Amy, I'm a normal bloke, tell me what normal blokes do!
    
    I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself. Sorry, checking all the water in this area; there's an escaped fish. No… It's a thing; it's like a plan, but with more greatness.
    
    I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship. All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong?`,
  },
];

const test = {
  data: posts,
  count: posts.length,
};

export default async (request: Request, context: Context) => {
  return Response.json(test);
};
