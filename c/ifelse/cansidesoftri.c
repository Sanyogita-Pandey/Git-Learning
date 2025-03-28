#include<stdio.h>
int main(){
    int a,b,c;
    printf(" enter first side : ");
    scanf("%d",&a);
    printf(" enter second side : ");
    scanf("%d",&b);
    printf(" enter third side : ");
    scanf("%d",&c);
    if((a+b)>c && (b+c)>a && (c+a)>b){
        printf(" valid triangle");
    }
    else{
        printf(" invalid triangle");
    }
    return 0;
}