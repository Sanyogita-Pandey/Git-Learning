#include<stdio.h>
int main(){
    int n;
    printf(" enter percentage : ");
    scanf("%d",&n);
   if(n>91){
    printf(" Excellent percentage");
   }
   else if(n>81){
    printf(" Very Nice percentage ");
   }
   else if(n>71){
    printf(" Nice percentage");
   }
   else if(n>61){
    printf(" Good percentage");
   }
   else if(n>51){
    printf(" Bad percentage");
   }
   else{
    printf(" very bad percentage");
   }
    return 0;
}