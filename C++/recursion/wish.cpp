#include<iostream>
using namespace std ;
void wish(int n){
  //  while(n>0){
        cout<<n<<" days left for birthday ";
        return;
   // }
    if(n==0)
    cout<<" Happy Birthday ";
}
int main(){
    int n;
    cout<<" Enter number of days lefts : ";
    cin>>n;
    wish(n);

}