#include<stdio.h>
int main(){
    int a,b,c;
    printf(" Enter age of ram : ");
    scanf("%d",&a);
    printf(" Enter age of shyam : ");
    scanf("%d",&b);
    printf(" Enter age of ajay : ");
    scanf("%d",&c);
    if(a<b && a<c ){
        printf("ram is younger one");
    }
    if(b<a && b<c ){
        printf("shyam is younger one ");
    }
    if(c<a && c<b ){
        printf(" ajay is younger one ");
    }

    return 0;
}