#include<stdio.h>
int main(){
    struct pokemon{
        int hp;
        int speed;
        int attack;
        int tier;
    };
    struct pokemon pikachu;
    pikachu.attack = 60;
    pikachu.speed = 100;
    pikachu.hp = 50;
    pikachu.tier = 'A';

    printf("%d",pikachu.attack);

    struct pokemon charizard;
    charizard.attack = 130;
    charizard.hp = 80;
    charizard.speed = 80;
    charizard.tier = 'S';

    return 0;
}