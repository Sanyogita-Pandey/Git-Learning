#include<stdio.h>
int main(){
    float x1 ,x2 ,x3 ,y1 ,y2 ,y3 ,m1 ,m2;
    printf(" enter the value of x1 ");
    scanf("%d",&x1);
    printf(" enter the value of x2 ");
    scanf("%d",&x2);
    printf(" enter the value of x3 ");
    scanf("%d",&x3);
    printf(" enter the value of y1 ");
    scanf("%d",&y1);
    printf(" enter the value of y2 ");
    scanf("%d",&y2);
    printf(" enter the value of y3 ");
    scanf("%d",&y3);
     m1 =((y2 -y1)/(x2 - x1));
    printf("slope between (x1,y1) and (x2,y2) :%f",m1);
      m2 = ((y3 - y2)/(x3 - x2));
    printf(" slope between (x2,y2)and (x3,y3) :%f",m2);

    if(m1 = m2){
        printf(" all three points lie on straight line ");
    }
    else{
        printf(" points does not lie on the straight line");
    }
    return 0;
}